async function prom(){
 try{
  const a = await 10;
  return a;
 }
 catch(e){
  throw new Error('yoyoyoy');
 }
}

(async function prom2(){
  try{
    const result = await Promise.all([prom()])
    console.log(result)
  }catch(e){
    console.error(e)
  }
})()
