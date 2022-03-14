export class authservice{
    loggdenIn=false;
    isAthenticated()
    {
      const  promise=new Promise(
          (resolve,reject)=>{
              setTimeout(() => {
                  resolve(this.loggdenIn);
                  
              }, 400);

          }
      );
      return promise as Promise<boolean>;

    }
    login()
    {
        this.loggdenIn=true;
    }
    logout()
    {
        this.loggdenIn=false;
    }

}