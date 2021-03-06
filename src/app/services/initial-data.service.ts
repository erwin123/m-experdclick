import { Injectable } from '@angular/core';
import { Draweritems }  from '../models/draweritems'


@Injectable({
  providedIn: 'root'
})
export class InitialDataService {
  initialItems:Draweritems[] = [
    {name:"Connection", icon:"talk-bubbles", url:"", desc:"Hubungan dengan atasan dan rekan kerja (meliputi aspek pengawasan dan hubungan kerja)"},
    {name:"Liability", icon:"plugin", url:"", desc:"Accountability / rasa keterikatan dan tanggung jawab thd pekerjaan yang dilakukan (meliputi aspek pekerjaan dan tanggung jawab)"},
    {name:"Improvement", icon:"curve-chart", url:"", desc:"Kesempatan untuk mengembangkan karier dan mengaktualisasikan diri (meliputi aspek aktualisasi diri dan pengembangan karier)"},
    {name:"Context", icon:"bullseye", url:"", desc:"Kondisi eksternal / lingkungan kerja (meliputi aspek kondisi pekerjaan, peraturan & kebijakan)"},
    {name:"acKnowledgement", icon:"lightbulb", url:"", desc:"Penghargaan yang diperoleh sebagai timbal balik dari pekerjaan yang dilakukan (meliputi aspek pengakuan & penghargaan, dan kompensasi)"},
    {name:"Info", icon:"info-circle", url:"", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
  ]
  constructor() { }
  
  getInitialDrawer(){
    return this.initialItems;
  }
}
