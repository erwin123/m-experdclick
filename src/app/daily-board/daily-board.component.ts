import { Component, OnInit } from '@angular/core';
import { Dailytask } from '../models/dailytask';
import { DailytaskService } from '../services/dailytask.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-board',
  templateUrl: './daily-board.component.html',
  styleUrls: ['./daily-board.component.css']
})
export class DailyBoardComponent implements OnInit {

  constructor(private router:Router, private dailyTaskService:DailytaskService) { }
  progress: number = 0;
  emotionValue: number = 3;
  emotionDesc: string = "Nothing";
  longAnswer: string = "";
  questionTasks: Dailytask[] = example;
  questionTask: Dailytask;
  currentQuestion: number = 0;
  finish: boolean = false;

  ngOnInit() {
    this.questionTask = new Dailytask();
    this.questionTask = this.questionTasks[this.currentQuestion];
  }

  changeMood($event) {
    this.emotionValue = $event.target.value;
    console.log($event.target.value + " Clicked!");
  }

  submit() {
    this.questionTasks[this.currentQuestion].answer = this.emotionValue;
    this.questionTasks[this.currentQuestion].longanswer = this.longAnswer;
    this.currentQuestion++;

    if (this.currentQuestion < this.questionTasks.length) {

      this.questionTask = new Dailytask();
      this.questionTask = this.questionTasks[this.currentQuestion];
      this.progress = this.progress + 1;
      this.emotionValue = 3;
      this.longAnswer = "";
    }
    else{
      this.progress = this.progress + 1;
      console.log(this.questionTasks);
      setTimeout(() => {
        this.dailyTaskService.saveDailyTask(this.questionTasks);
        this.finish = true;
      }, 500);
    }
  }

  modalClose(){
    this.router.navigate(['main/landing']);
  }
}


var example: Dailytask[] = [
  {
    question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?",
    answer: null,
    longanswer: ""
  },
  {
    question: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout?",
    answer: null,
    longanswer: ""
  },
  {
    question: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    answer: null,
    longanswer: ""
  }
]