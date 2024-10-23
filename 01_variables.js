const accountId = 144553
let accountEmail = "shashwat@google.com"
var accountPasssword = "12345"
accountCity = "Vellore"
let accountState

// accountId = 2 //not allowed to change const

accountEmail = "shashwat@shashwat.com"
accountPasssword = "211212121"
accountCity = "Kolkata"


console.log(accountId)

/* Prefer not to use var
because it doesn't recognize block scopes and functional scopes
 */


console.table([accountId, accountEmail,accountPasssword,accountCity, accountState])
