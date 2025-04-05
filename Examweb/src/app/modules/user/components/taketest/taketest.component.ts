import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../../services/test.service';
import { UserStorageService } from '../../../auth/services/user-storage.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button'; // ✅ Import NzButtonModule

@Component({
  selector: 'app-taketest',
  standalone: true,
  imports: [SharedModule, NzButtonModule], // ✅ Added NzButtonModule
  templateUrl: './taketest.component.html',
  styleUrls: ['./taketest.component.scss']
})
export class TaketestComponent {
  questions: any[] = [];
  testId: any;
  selectedAnswers: { [key: number]: string } = {};
  timeRemaining: number = 0;

  constructor(
    private testService: TestService, 
    private activatedRoute: ActivatedRoute,
    private userStorageService: UserStorageService, // ✅ Fixed: Used injected instance
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.testId = +params.get('id');

      this.testService.getTestQuestions(this.testId).subscribe(res => {
        this.questions = res.questions;
        console.log(this.questions);

        this.timeRemaining = res.testDTO.time || 0;
      });
    });
  }

  onAnswerChange(questionId: number, selectedOption: string) {
    this.selectedAnswers[questionId] = selectedOption;
    console.log(this.selectedAnswers);
  }

  getFormattedTime(): string {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // 5:02
  }
  
  


  submitAnswers() {
    const answerList = Object.keys(this.selectedAnswers).map(questionId => {
      return {
        questionId: +questionId,
        selectedOption: this.selectedAnswers[questionId]
      };
    });

    const data = {
      testId: this.testId,
      userId: UserStorageService.getUserId(),// ✅ Fixed: Used injected instance
      responses: answerList
    };

    this.testService.submitTest(data).subscribe(
      res => {
        this.message.success('Test Submitted Successfully', { nzDuration: 5000 });
        this.router.navigateByUrl('user/view-test-result');
      },
      error => {
        this.message.error(`${error.error}`, { nzDuration: 5000 });
      }
    );
  }
}
