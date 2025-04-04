import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../admin/services/admin.service';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-taketest',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './taketest.component.html',
  styleUrl: './taketest.component.scss'
})
export class TaketestComponent {
  questions: any[] = [];
    testId: any;

    constructor(private testService: TestService, 
      private activatedRoute: ActivatedRoute) {}

      ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.testId = +params.get('id');
            
            this.testService.getTestQuestions(this.testId).subscribe(res => {
                this.questions = res.questions;
                console.log(this.questions);
            });
        });
    }

}
