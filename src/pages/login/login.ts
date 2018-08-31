import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  navigate(data){
    this.navCtrl.push("LoginPage");
}
perfomLogin(){
  firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(User =>{
    this.navCtrl.push("HomePage");
  })
}
googlesign(){
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(user =>{
  this.navCtrl.push("HomePage")

})

}


}
