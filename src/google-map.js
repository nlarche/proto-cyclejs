  export default class GoogleMapWidget {
      constructor(initialPosition){
        this.type = 'Widget'
        this.position = initialPosition
      }
      init(){
        const elem = document.createElement('div')
        this.map = new google.maps.Map(elem)
        //this.map.setPosition(this.position)
        return elem
      }
      update(prev, elem){
        this.map = this.map || prev.map
        this.map.setPosition(this.position)
      }
  }
