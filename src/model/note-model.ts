//  export class Note {
//   noteId;
//   title;
//   content;
//   createdBy;
//   createdOn;
//   constructor(noteId: Number, title: String, content: String, createdBy: Number, createdOn: Number) {
//     this.noteId = noteId;
//     this.title = title;
//     this.content = content;
//     this.createdBy = createdBy;
//     this.createdOn = createdOn;
//   }
// }


export interface Note {
    noteId: Number;
    title: String;
    content: String;
    createdBy: String;
    createdOn: Number;
}
