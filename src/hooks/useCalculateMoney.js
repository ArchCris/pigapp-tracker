
export const useCalculateMoney = () => {

  const calculateMoney = (diners) =>{

    const arrayPaidMoney = []
    let totalPaidMoney = 0

    const nodePaidMoney = document.querySelectorAll('.paidMoney')
    const nodeRestMoney = document.querySelectorAll('.restMoney')

    nodePaidMoney.forEach(node=>{
      arrayPaidMoney.push(node.value)
      totalPaidMoney+=Number(node.value)
    })

    for (let i = 0; i < diners; i++) {
      let result = (totalPaidMoney/diners)-arrayPaidMoney[i]

      nodeRestMoney[i].innerHTML=Math.abs(result.toFixed(2))
      
      if(Math.sign(result)===1){
        nodeRestMoney[i].previousSibling.innerHTML='I owe'
        nodeRestMoney[i].style.color='red'
      }else if(Math.sign(result)===-1){
        nodeRestMoney[i].previousSibling.innerHTML='They owe me'
        nodeRestMoney[i].style.color='green'
      }else if(result===0){
        nodeRestMoney[i].innerHTML='😁'
        nodeRestMoney[i].previousSibling.innerHTML='Even'
        nodeRestMoney[i].style.color='green'
      }
    }

  }
  return calculateMoney
}