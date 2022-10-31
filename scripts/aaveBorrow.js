async function main(){
	// the protocol treats everything like an ERC20 token

}
main()
	.then(()=>process.exit(0))
	.catch(error)=>{
		console.log(error)
		process.exit(1)
	}