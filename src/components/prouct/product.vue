<template>
    <h1>Product works!</h1>
    <div class="grid">
        
        <div class="col-2">
            <div style="marginRight: 2rem">
                <div class="img1"></div>
                <div class="img2"></div>
                <div class="img3"></div>
                <div class="img4"></div>
                <div class="img5"></div>
            </div>
            <img style="width: 100%; position: relative" src="https://render.fineartamerica.com/images/rendered/default/metal-print/6.5/10/break/images-medium-5/a-brooklyn-perspective-az-jackson.jpg" alt="">
        </div>
        <div class="col-3">
            <div>
                <div class="first-level">
                    <div class="next">
                        <i class="pi pi-angle-left"></i>
                        <p class="next-p">PREV</p>
                        <div class="separator"></div>
                        <p class="next-p" >NEXT</p>
                        <i class="pi pi-angle-right"></i>
                    </div>
                    <div class="likes">
                        <div class="list-card">
                            <div class="card-like">
                                <div class="card-like__top"><i class="pi pi-heart" style="fontSize: .9rem;"></i></div>
                                <div class="card-like__down">190</div>
                            </div>
                            <div class="card-like">
                                <div class="card-like__top"><i class="pi pi-thumbs-up" style="fontSize: .9rem"></i></div>
                                <div class="card-like__down">750</div>
                            </div>
                            <div class="card-like">
                                <div class="card-like__top"><i class="pi pi-comment" style="fontSize: .9rem"></i></div>
                                <div class="card-like__down">389</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- SEPARATOR -->
                <div class="separator-level"></div>
                <!-- SECOND LEVEL -->
                <div class="second-level">
                    <h4 class="second-level__h4">A Brooklyn Perspective Metal Print</h4>
                    <div class="second-level__thumbnail">
                        <img style="width: 2rem; height: 2rem; borderRadius: 1rem; marginRight: 1rem" src="https://images.fineartamerica.com/images/artistlogos/az-jackson-1412309799-square.jpg" alt="">
                        <p style="fontSize: .8rem"> by <b>Az Jackson</b></p>
                    </div>
                </div>
                <!-- SEPARATOR -->
                <div class="separator-level"></div>
                <!-- THIRD LEVEL -->
                <div class="third-level">
                    <div class="third-level__price" v-on="click">
                        <div class="price-price">
                            <h3 style="fontSize: 2rem; fontWeight: 300; margin: 0">$83,00</h3>
                            <p class="price-price__p" >Show price details</p>
                        </div>
                        <div class="price-button">
                            <Button class="p-button-M" style="backgroundColor: #4cd4bf; border: #4cd4bf; height: 2.5rem" label="ADD TO CART" />
                            <p class="price-button__p "  st> Add to Favorites</p>
                        </div>
                    </div>
                    <div>
                        <div v-on:click="geralButton()" @dblclick="disableButton()" class="third-level__button" >
                            <img style="width: 3rem; marginRight: 1rem" src="https://render.fineartamerica.com/images/rendered/small/metal-print/images-square-real-5/a-brooklyn-perspective-az-jackson.jpg" alt="">
                            <h4 style="fontWeight: 300; fontSize: 1.3rem; marginRight: 1rem">Metal Print</h4>
                            <i style="fontWeight: 800; fontSize: 1.2rem; color: grey" class="pi pi-chevron-down"></i>
                        </div>
                        <div v-on:click="disableButton()" v-if="Button === 1" class="third-level__button">
                            <img style="width: 3rem; marginRight: 1rem" src="https://render.fineartamerica.com/images/rendered/small/canvas-print/mirror/break/images-square-real-5/a-brooklyn-perspective-az-jackson-canvas-print.jpg" alt="">
                            <h4 style="fontWeight: 300; fontSize: 1.3rem; marginRight: 1rem">Canvas Print</h4>
                        </div>  
                        <div v-on:click="disableButton()" v-if="Button === 1" class="third-level__button">
                            <img style="width: 3rem; marginRight: 1rem" src="https://render.fineartamerica.com/images/rendered/small/framed-print/images-square-real-5/a-brooklyn-perspective-az-jackson.jpg" alt="">
                            <h4 style="fontWeight: 300; fontSize: 1.3rem; marginRight: 1rem">Framed Print</h4>
                        </div>  
                        <div v-on:click="disableButton()" v-if="Button === 1" class="third-level__button">
                            <img style="width: 3rem; marginRight: 1rem" src="https://render.fineartamerica.com/images/rendered/small/metal-print/images-square-real-5/a-brooklyn-perspective-az-jackson.jpg" alt="">
                            <h4 style="fontWeight: 300; fontSize: 1.3rem; marginRight: 1rem">Art Print</h4>
                        </div>  
                        <div v-on:click="disableButton()" v-if="Button === 1" class="third-level__button">
                            <img style="width: 3rem; marginRight: 1rem" src="https://render.fineartamerica.com/images/rendered/small/print/images-square-real-5/a-brooklyn-perspective-az-jackson.jpg" alt="">
                            <h4 style="fontWeight: 300; fontSize: 1.3rem; marginRight: 1rem">Poster Print</h4>
                        </div>  
                        <div v-on:click="disableButton()" v-if="Button === 1" class="third-level__button">
                            <img style="width: 3rem; marginRight: 1rem" src="https://render.fineartamerica.com/images/rendered/small/print/images-square-real-5/a-brooklyn-perspective-az-jackson.jpg" alt="">
                            <h4 style="fontWeight: 300; fontSize: 1.3rem; marginRight: 1rem">Acrylic Print</h4>
                        </div>  
                        <div v-on:click="disableButton()" v-if="Button === 1" class="third-level__button">
                            <img style="width: 3rem; marginRight: 1rem" src="https://render.fineartamerica.com/images/rendered/small/wood-print/images-square-real-5/a-brooklyn-perspective-az-jackson.jpg" alt="">
                            <h4 style="fontWeight: 300; fontSize: 1.3rem; marginRight: 1rem">Wood Print</h4>
                        </div>  
                    </div>
                    <div class="four-level">
                        <div class="four-level__size">
                            <h4 style="fontSize: .8rem; margin: 0 0 .5rem 0; fontWeight: 300">PRINT SIZE</h4>
                            <Dropdown v-model="selectedSize" :options="sizes" optionLabel="name" placeholder="Select a Size" />
                        </div>
                        <div class="four-level__shape">
                            <h4 style="fontSize: .8rem; margin: 0 0 .5rem 0; fontWeight: 300">SHAPE</h4>
                            <Dropdown v-model="selectedShape" :options="shapes" optionLabel="name" placeholder="Select a Shape" />
                        </div>
                    </div>
                    <div class="five-level">
                        <h5 class="five-level__head">PRODUCT DETAILS</h5>
                        <p class="five-level__text">A Brooklyn Perspective metal print by Az Jackson.   Bring your artwork to life with the stylish lines and added depth of a metal print. Your image gets printed directly onto a sheet of 1/16" thick aluminum. The aluminum sheet is offset from the wall by a 3/4" thick wooden frame which is attached to the back. The high gloss of the aluminum sheet complements the rich colors of any image to produce stunning results.</p>
                        <h5 class="five-level__head">DESIGN DETAILS</h5>
                        <p class="five-level__text">The steel web and iconic arches of the Brooklyn Bridge connecting Manhattan to Brooklyn in New York City, NY</p>
                        <h5 class="five-level__head">SHIPS WITHIN</h5>
                        <p class="five-level__text">3 - 4 business days</p>
                    </div>
                </div>

                
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            Button: 0,
            selectedSize: null,
            selectShape: null,
            shapes: [
                {name: 'Natural'},
                {name: 'Vertical'},
                {name: 'Horizontal'},
                {name: 'Square'},

            ],
            sizes: [
                {name: '17cm x 25cm' },
                {name: '20cm x 30cm' },
                {name: '24cm x 36cm' },
                {name: '27cm x 41cm' },
                {name: '34cm x 51cm' },
                {name: '41cm x 61cm' },
                {name: '51cm x 76cm' },
                {name: '61cm x 91cm' },
                {name: '67cm x 102cm' },
                {name: '81cm x 122cm' },
                {name: '102cm x 152cm' },
            ]
        }
    },
    methods: {
        showButton() {
            this.Button = 1
        },
        disableButton() {
            this.Button = 0
        }, 
        geralButton() {
            if (this.Button === 0){ this.showButton()}
            else { this.disableButton()}
        }
    }
    
}
</script>

<style src="./style.css" scoped></style>