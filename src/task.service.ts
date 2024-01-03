import { Inject, Injectable } from "@nestjs/common";
import { Cron, CronExpression, Interval, Timeout } from "@nestjs/schedule";
import { AaaService } from "./aaa/aaa.service";

@Injectable()
export class TaskService {
  @Inject(AaaService)
  private aaaService: AaaService

  @Cron(CronExpression.EVERY_5_SECONDS,{
  //  添加时区
  //   https://momentjs.com/timezone/
    name: 'task1',
    timeZone: 'Asia/shanghai'
  })
  handleCron() {
    console.log('task execute:', this.aaaService.findAll());
  }

  @Interval('task2', 500)
  taks2() {
    console.log('task2');
  }
  @Timeout('task3', 3000)
  task3() {
    console.log('task3');
  }
}
