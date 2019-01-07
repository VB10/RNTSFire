import firebase from "@firebase/app";
import "@firebase/database";
export function setup() {
  firebase.initializeApp({
    apiKey: "AIzaSyACyIx2q6UNWxP7UPbIlaeqF6Q8-JBpYuY",
    authDomain: "reacttest-d7f4d.firebaseapp.com",
    databaseURL: "https://reacttest-d7f4d.firebaseio.com",
    projectId: "reacttest-d7f4d",
    storageBucket: "reacttest-d7f4d.appspot.com",
    messagingSenderId: "597721691656"
  });
}

export function getDatabaseChild(val: string) {
  let arr: any[] = [];

  return firebase.database!()
    .ref(val)
    .once("value", snapshot => {
      console.log(snapshot.val());

      snapshot.forEach(data => {
        console.log(data.val());

        arr.push(data.val());
      });
    })
    .then(() => {
      return arr;
    });

}
