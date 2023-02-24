const css = require("./src/JLayout.vue.cjs")['@global']
module.exports = {
  match_u: {
    'w-offset-r'(value){
      let [son, father] = value.split('/')
      let res = (parseInt(son) / parseInt(father) * 100).toFixed(6)
      res += '%'
      console.log(res,"-w")
      return {
        'margin-right': res
      }
    },
    'w-offset-l'(value){
      let [son, father] = value.split('/')
      let res = (parseInt(son) / parseInt(father) * 100).toFixed(6)
      res += '%'
      console.log(res,"w")
      return {
        'margin-left': res
      }
    },
    'w-push'(value){
      let [son, father] = value.split('/')
      let res = (parseInt(son) / parseInt(father) * 100).toFixed(6)
      res += '%'
      console.log(res,"w-push")
      return {
        'position':'relative',
        'left':res
      }
    },
    'w-pull'(value){
      let [son, father] = value.split('/')
      let res = (parseInt(son) / parseInt(father) * 100).toFixed(6)
      res += '%'
      console.log(res,"w")
      return {
        'position':'relative',
        'right':res
      }
    },
    'w-j-p'(value){
        let [son, father] = value.split('/')
        let res = (parseInt(son) / parseInt(father) * 100).toFixed(6)
        res += '%'
        return {
          'width':res
        }
    }
  },
  css
}