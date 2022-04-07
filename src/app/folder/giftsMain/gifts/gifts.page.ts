import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GiftsService } from 'src/service/gifts.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.page.html',
  styleUrls: ['./gifts.page.scss'],
})
export class GiftsPage implements OnInit {
 
  questionList = [
    new Question("People often ask me for spiritual or personal advice.","Wisdom"),
    new Question("I can effectively explain God’s Word to others.","Teaching"), 
    new Question("I receive pleasure when caring for others.","Shepherding"),
    new Question("I can speak God’s Word so that others turn from sin.","Prophecy"),
    new Question("I can feel the pain of suffering people and try to help them in their recovery.","Mercy"), 
    new Question("I can inspire others to achieve their goals.","Leadership"),
    new Question("People often ask me about the meaning of a particular Scripture or biblical truth.","Knowledge"),
    new Question("I often ask people for their prayer requests so I can pray for them.","Intercession"),
    new Question("I enjoy using my home as a place to minister to others.","Hospitality"),
    new Question('I prefer to work “behind the scenes” on a project or program.',"Helps"),
    new Question("I generously give to people in need or to programs, and I receive joy in doing so.","Giving"),
    new Question("It’s easy for me to trust God to answer my prayers.","Faith"),
    new Question("I can explain the Gospel message to others so that it’s understood.","Evangelism"),
    new Question("I usually look for the best in people.","Encouragement"),
    new Question("I can tell the difference between spiritual truth and false teachings.","Discernment"),
    new Question("I enjoy the details of planning events and tasks and organizing groups.","Administration"),

    new Question("I’m a good problem solver and can find solutions often overlooked by others.","Wisdom"),
    new Question("I enjoy personal Bible study and research, knowing that the information I present can affect someone’s eternity.","Teaching"), 
    new Question("I desire to help wandering believers get back on the right path.","Shepherding"),
    new Question("I’m compelled to confront people with the truth of God’s Word.","Prophecy"),
    new Question("I have patience when it comes to helping people get their lives back on track after a crisis","Mercy"), 
    new Question("Helping communicate a vision is one of my strengths.","Leadership"),
    new Question("It’s easy for me to share my Bible knowledge with others.","Knowledge"),
    new Question("I often lose track of the time when I pray and believe God gives me special insight in knowing what to pray about.","Intercession"),
    new Question("I like to meet new people and help them feel comfortable in new surroundings.","Hospitality"),
    new Question('I don’t mind doing repetitive and routine work if it supports the ministry of my church.',"Helps"),
    new Question("God has given me extra financial resources so that I might be able to generously support the church.","Giving"),
    new Question("Even during difficult circumstances, I have confidence that God will provide assistance and resources to get me through.","Faith"),
    new Question("I like to develop relationships with non-Christians in order to share the Gospel with them.","Evangelism"),
    new Question("I am able to encourage and reassure others.","Encouragement"),
    new Question("My first impression of people is usually accurate.","Discernment"),
    new Question("I organize work in a thorough and detailed manner.","Administration"),

    new Question("I can select the best solution that is needed to resolve an issue.","Wisdom"),
    new Question("I carefully note, review, and evaluate the material that is taught by others.","Teaching"), 
    new Question("I like to give holistic guidance to help people with any need or problem they may have.","Shepherding"),
    new Question("I’m willing to go against the current cultural trend and philosophy if it is not supportive of biblical principles.","Prophecy"),
    new Question("I enjoy helping people who are often seen by others as dysfunctional, “high maintenance,” or hopeless.","Mercy"), 
    new Question("I can relate well to others in order to help them reach their full potential.","Leadership"),
    new Question("I often schedule time when I can read and study Scripture so that I gain biblical truth and insight.","Knowledge"),
    new Question("I feel as though I am ministering to others when I pray for them.","Intercession"),
    new Question("I believe God directs people to me who are in need of friendship and community.","Hospitality"),
    new Question('I enjoy taking on those little jobs at church that no one else seems to want to do.',"Helps"),
    new Question("I am able to give more of my money to church because I can save and manage my resources well.","Giving"),
    new Question("I know that God will help me accomplish anything he sets before me.","Faith"),
    new Question("I can help people connect to the Gospel so it applies to their needs.","Evangelism"),
    new Question("I enjoy sharing the promises of God so that others may receive hope.","Encouragement"),
    new Question("I can spot a “phony” when others may be deceived by their actions.","Discernment"),
    new Question("I can establish goals and objectives in order to achieve results.","Administration"),

    new Question("I can usually determine the outcome of a person’s lifestyle choices.","Wisdom"),
    new Question("I enjoy a systematic approach to Bible study.","Teaching"), 
    new Question("I am able to provide long-term care to those who need my support.","Shepherding"),
    new Question("I feel the need to correct people when their actions are wrong or contrary to God’s Word.","Prophecy"),
    new Question("My heart goes out to hurting people.","Mercy"), 
    new Question("I enjoy goal-setting and leading people to accomplish their goals.","Leadership"),
    new Question("I usually discover biblical insights when studying Scripture, which helps others better understand God’s Word.","Knowledge"),
    new Question("When I hear about a crisis or someone in need, I feel an urgency to pray.","Intercession"),
    new Question("I can create an accepting environment in any setting where people feel at home.","Hospitality"),
    new Question('I like to use my learned skills to help out with whatever job needs to be done.',"Helps"),
    new Question("I often limit my lifestyle options so I can give my church a higher portion of my income.","Giving"),
    new Question("I trust God in circumstances where success cannot be guaranteed by human effort alone.","Faith"),
    new Question("I enjoy asking people to make a faith commitment to Jesus.","Evangelism"),
    new Question("I take pleasure in encouraging people who may be doubtful in their faith.","Encouragement"),
    new Question("I usually see things as black or white, right or wrong.","Discernment"),
    new Question("I am able to identify and utilize the resources necessary to complete a task.","Administration"),
    
  ]

  
  

  constructor(private giftsProv:GiftsService, private router: Router) { 
  }

  ngOnInit() {
  }

  submit(){
    this.questionList.forEach(q=>{
      if(q.category=="Wisdom"){
        this.giftsProv.indySum(0,Number(q.score));
        
      }else if(q.category=="Teaching"){
        this.giftsProv.indySum(1,Number(q.score));
        
      }else if(q.category=="Shepherding"){
        this.giftsProv.indySum(2,Number(q.score));
        
      }else if(q.category=="Prophecy"){
        this.giftsProv.indySum(3,Number(q.score));
        
      }else if(q.category=="Mercy"){
        this.giftsProv.indySum(4,Number(q.score));
        
      }else if(q.category=="Leadership"){
        this.giftsProv.indySum(5,Number(q.score));
        
      }else if(q.category=="Knowledge"){
        this.giftsProv.indySum(6,Number(q.score));
        
      }else if(q.category=="Intercession"){
        this.giftsProv.indySum(7,Number(q.score));
        
      }else if(q.category=="Hospitality"){
        this.giftsProv.indySum(8,Number(q.score));
       
      }else if(q.category=="Helps"){
        this.giftsProv.indySum(9,Number(q.score));
        
      }else if(q.category=="Giving"){
        this.giftsProv.indySum(10,Number(q.score));
        
      }else if(q.category=="Faith"){
        this.giftsProv.indySum(11,Number(q.score));
        
      }else if(q.category=="Evangelism"){
        this.giftsProv.indySum(12,Number(q.score));
        
      }else if(q.category=="Encouragement"){
        this.giftsProv.indySum(13,Number(q.score));
        
      }else if(q.category=="Discernment"){
        this.giftsProv.indySum(14,Number(q.score));
        
      }else if(q.category=="Administration"){
        this.giftsProv.indySum(15,Number(q.score));
        
      }
    })

    this.giftsProv.rankGifts();
    console.log(this.giftsProv.getGifts())

    this.router.navigate(['/results'])
    
  }



}


class Question{
  constructor(question:string,cat:string){
    this.question=question;
    this.category=cat;
  }
  question:string;
  score=0;
  category:string;
}
