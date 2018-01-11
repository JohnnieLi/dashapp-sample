import {Component, OnInit} from '@angular/core';


interface User {
    username: String;
    firstName: String;
    lastName: String;
    status: number;
}


@Component({
    selector: 'app-users',
    templateUrl: './usersManager.component.html',
    styleUrls: [ './usersManager.component.scss'],
})



export class UsersManagerComponent implements OnInit {

    private firstNameSearchText: String;
    private lastNameSearchText: String;
    private statusSearchNumber: number;
    private uaernameSearchText: String;

    public USERS = [
        {
            username: '@mdo',
            firstName: 'Mark',
            lastName: 'Otto',
            status: 1
        },
        {
            username: '@fat',
            firstName: 'Jacob',
            lastName: 'Thornton',
            status: 1
        },
        {
            username: '@twitter',
            firstName: 'John',
            lastName: 'Mont',
            status: 0
        },
        {
            username: '@mdo',
            firstName: 'UsersManagerComponent',
            lastName: 'Max',
            status: 1
        },

    ];

    private users: User[];


    ngOnInit() {
        this.users = this.USERS;
    }
}