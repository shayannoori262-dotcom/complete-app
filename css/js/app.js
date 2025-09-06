let currentUser = null;
onAuthStateChanged(auth, async user => {
currentUser = user;
if(user){
// ...
}
});
window.getCurrentUser = () => currentUser;
