
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
      let signo = Math.sign(result)
      if(signo===1){
        nodeRestMoney[i].previousSibling.innerHTML='Debo'
        nodeRestMoney[i].style.color='red'
      }else if(signo===-1){
        nodeRestMoney[i].previousSibling.innerHTML='Me deben'
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