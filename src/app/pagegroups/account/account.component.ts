import {Component, OnInit} from '@angular/core';
import {ToolbarService} from '../../_services/toolbar.service';
import {AccountService} from '../../_services/account.service';
import {User} from '../../_interfaces/user';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styles: []
})
export class AccountComponent implements OnInit {

    hide = true;

    pictureFile;
    pictureSrc;

    user: User;

    userForm: FormGroup;

    constructor(private toolbarService: ToolbarService, private accountService: AccountService) {
    }

    ngOnInit() {
        this.toolbarService.setToolbarTitle('Account');

        this.accountService.loggedUser.subscribe(data => {
            this.user = data;
        });

        this.userForm = new FormGroup({
            firstName: new FormControl(this.user.firstName),
            lastName: new FormControl(this.user.lastName),
            email: new FormControl(this.user.email),
            picture: new FormControl(this.user.picture),
            password: new FormControl(this.user.password),
        });
    }

    uploadPicture(event) {
        if (event.target.files && event.target.files[0]) {
            this.pictureFile = event.target.files[0];

            const reader = new FileReader();
            reader.onload = e => this.pictureSrc = reader.result;
            console.log(this.pictureSrc);

            reader.readAsDataURL(this.pictureFile);
        }
    }

    updateUser() {
        this.userForm.value.picture = this.pictureSrc;
        console.log(this.userForm.value);
        this.accountService.updateUser(this.userForm.value);
    }

}
