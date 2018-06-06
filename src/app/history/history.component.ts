import { Component, OnInit } from '@angular/core';
import { DailytaskService } from '../services/dailytask.service';
import { Dailytask } from '../models/dailytask';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public listDailyTask:Dailytask[];
  constructor(private dailyTaskService:DailytaskService) { }

  ngOnInit() {
    this.listDailyTask = this.dailyTaskService.getDailyTasks();
    console.log(this.listDailyTask);
  }

}
