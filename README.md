# Recipe Shopping List

My first application built in Angular. Uses Firebase database and hosting to allow users to add recipes, and save the ingredients to a shopping list. 

## Screenshots 
![](/src/assets/recipe.png)
![](/src/assets/list.png)

## Description

`Save Data` button to save the recipe to the database.<br>
`Fetch Data` button to grab all recipes from the database.

Check Out the Live App Here: [Shopping Recipe List](https://ng-recipe-book-58248.web.app/)


## APIs Used

- Authentication using [Firebase Auth REST API](https://firebase.google.com/docs/reference/rest/auth)

```javascript
  signup(email: string, password: string) {
        return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + environment.firebaseAPIKey,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
```

## Technologies Used
 - [Angular](https://angular.io/)
 - [Firebase](https://firebase.google.com/)
