function HasBalancedBrackets (string) {
}

console.log(HasBalancedBrackets("{ [ ] ( ) }"))
console.log(HasBalancedBrackets("{ [ ( ] ) }"))
console.log(HasBalancedBrackets("{ [ ] ) }"))
console.log(HasBalancedBrackets("{ [ }"))
console.log(HasBalancedBrackets("{ [ ( [ { ( )[ ]{ } } ] ) ] }"))

module.exports = HasBalancedBrackets
