export interface Question{
    id: number;
    questionText: string;
    difficultyLevel:number,
    vacancyId:number,
    answers: any[];
}
export interface ApiResponse {
    questions: Question[];
  }

  export interface Answer{
    id:number,
    answerText:string,
    questionId:number
  }