import { Injectable } from '@angular/core';
import { Dailytask } from '../models/dailytask';

@Injectable({
  providedIn: 'root'
})
export class DailytaskService {

  public listDailyTask: Dailytask[];
  constructor() { }

  saveDailyTask(dailyTasks: Dailytask[]) {
    if (this.listDailyTask)
      this.listDailyTask.concat(dailyTasks);
    else
      this.listDailyTask = dailyTasks;
    console.log(this.listDailyTask);
  }

  getDailyTasks() {
    return this.listDailyTask;
  }
}
