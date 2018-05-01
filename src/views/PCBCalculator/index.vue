<template>
<div>

	<div v-if="isShow">
		
		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Quantity: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <div class="">
						 <!-- <select v-model="orderPcbRequest.data.quantity">
						    <option v-for="qty in orderpcbView.qty.options" :value="qty.value">
						    	{{qty.label}}
						    </option>
						  </select> -->
						  <input type="radio" name="quantity" value="5" v-model="orderPcbRequest.data.quantity"><span>5</span>
						  <input type="radio" name="quantity" value="10" v-model="orderPcbRequest.data.quantity"><span>10</span>
						</div>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Layers: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button"
				    	v-bind:class="{ 'buttonBorder': (index === activeLayer) }" 
				    	v-for="(layer, index) in orderpcbView.layers.options" 
				    	:value="layer.value" @click="setLayers(index)"
				    	style="margin-right: 10px;">
				      	{{layer.label}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Board Heigth: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <div class="select">
						  <select v-model="orderPcbRequest.data.board_height">
						    <option v-for="bLength in orderpcbView.boardLength.options" v-bind:value="bLength.value">
						    	{{bLength.label}}
						    </option>
						  </select>
						</div>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Board Width: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <div class="select">
						  <select v-model="orderPcbRequest.data.board_width">
						    <option v-for="bWidth in orderpcbView.boardWidth.options" :value="bWidth.value">
						    	{{bWidth.label}}
						    </option>
						  </select>
						</div>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Board Thickness: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <div class="select">
						  <select v-model="orderPcbRequest.data.thickness">
						    <option v-for="bThick in orderpcbView.boardThickness.options" :value="bThick.value">
						    	{{bThick.label}}
						    </option>
						  </select>
						</div>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Surface Finish: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button"
				    	v-bind:class="{ 'buttonBorder': (index === activeSurfaceFinish) }" 
				    	v-for="(sFinish, index) in orderpcbView.surfaceFinish.options" 
				    	:value="sFinish.value" @click="setSurfaceFinish(index)"
				    	style="margin-right: 10px;">
				      	{{sFinish.label}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Copper Weight: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button"
				    	v-bind:class="{ 'buttonBorder': (index === activeCopperWeight) }" 
				    	v-for="(cWeight, index) in orderpcbView.copperWeight.options" 
				    	:value="cWeight.value" @click="setCopperWeight(index)"
				    	style="margin-right: 10px;">
				      	{{cWeight.label}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Min Tracing: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button"
				    	v-bind:class="{ 'buttonBorder': (index === activeMinTracing) }" 
				    	v-for="(mTracing, index) in orderpcbView.minTracing.options" 
				    	:value="mTracing.value" @click="setMinTracing(index)"
				    	style="margin-right: 10px;">
				      	{{mTracing.label}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Impedance Control: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button"
				    	v-bind:class="{ 'buttonBorder': (index === activeImpedanceControl) }" 
				    	v-for="(iControl, index) in orderpcbView.impedanceControl.options" 
				    	:value="iControl.value" @click="setImpedanceControl(index)"
				    	style="margin-right: 10px;">
				      	{{iControl.label}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Num Designs: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <div class="select">
						  <select v-model="orderPcbRequest.data.quantity">
						    <option v-for="numDesign in orderpcbView.numDesigns.options" :value="numDesign.value">
						    	{{numDesign.label}}
						    </option>
						  </select>
						</div>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Min Hole Size: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button"
				    	v-bind:class="{ 'buttonBorder': (index === activeMinHoleSize) }" 
				    	v-for="(mHoleSize, index) in orderpcbView.minHoleSize.options" 
				    	:value="mHoleSize.value" @click="setMinHoleSize(index)"
				    	style="margin-right: 10px;">
				      	{{mHoleSize.label}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Board Drill: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button"
				    	v-bind:class="{ 'buttonBorder': (index === activeBoardDrill) }" 
				    	v-for="(bDrill, index) in orderpcbView.boardDrill.options" 
				    	:value="bDrill.value" @click="setBoardDrill(index)"
				    	style="margin-right: 10px;">
				      	{{bDrill.label}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Shipping Time: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <div class="select">
						  <select>
						    <option v-for="sTime in orderpcbView.shippingTime.options" :value="sTime.value">
						    	{{sTime.label}}
						    </option>
						  </select>
						</div>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Shipping To: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <div class="select">
						  <select>
						    <option v-for="shipping in orderpcbView.shippingTo.options" :value="shipping.value">
						    	{{shipping.label}}
						    </option>
						  </select>
						</div>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Solder Color: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
		     		
				    <a class="button" v-bind:class="{ 'buttonBorder': (index === activeSolderColor) }" 
				    	v-for="(solderColor, index) in orderpcbView.solderColor.options" @click="setSolderColor(index)"
				    	style="margin-right: 10px;">

				    	<span class="icon">
      					<em class="sample-color"
      						:style="{'background-color': solderColor.value}"
      						v-bind:class="{ 'solderMask-border': (solderColor.value === 'none' || solderColor.value === 'White')}">
      					</em>
    					</span>

    					<span>{{solderColor.label}}</span>
				      
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Screen Color: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button" v-bind:class="{ 'buttonBorder': (index === activeScreenColor) }" 
				    	v-for="(screenColor, index) in orderpcbView.screenColor.options" @click="setScreenColor(index)"
				    	style="margin-right: 10px;">

				    	<span class="icon">
      					<em class="sample-color"
      						:style="{'background-color': screenColor.value}"
      						v-bind:class="{ 'solderMask-border': (screenColor.value === 'none' || screenColor.value === 'White')}">
      					</em>
    					</span>

    					<span>{{screenColor.label}}</span>
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="columns">
  		<div class="column is-8" style="text-align: center; margin-top: 28px;">
  			<!-- <button class="button is-link" @click="save">Submit</button> -->
  			<el-button type="primary" :loading="loading" @click.native.prevent="save">
  				Submit
  			</el-button>
  		</div>
  	</div>

	</div>	
		
</div>	
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import orderPcbRequestFormat from '../../store/static/orderPcbRequestFormat.json'
export default {
  data() {
    return {
      orderpcbView: [],
      orderPcbRequest: [],
      isShow: false,
      loading: false,
      test: [],
      activeLayer: 0,
      activeSurfaceFinish: 0,
      activeCopperWeight: 0,
      activeMinTracing: 0,
      activeImpedanceControl: 0,
      activeMinHoleSize: 2,
      activeBoardDrill: 0,
      activeSolderColor: 0,
      activeScreenColor: 0
    }
  },
  computed: mapGetters({
    getOrderPcbResponse: 'getOrderPcbResponse',
    saveOrderPcbStatus: 'saveOrderPcbResponse'
  }),
  methods: {
    ...mapActions([
      'getOrderPcbView',
      'saveOrderPcb'
    ]),
    setLayers: function(index) {
      this.activeLayer = index
      this.orderPcbRequest.data.number_of_layers = this.orderpcbView.layers.options[index].value
    },
    setSurfaceFinish: function(index) {
      this.activeSurfaceFinish = index
      this.orderPcbRequest.data.finish = this.orderpcbView.surfaceFinish.options[index].value
    },
    setCopperWeight: function(index) {
      this.activeCopperWeight = index
      this.orderPcbRequest.data.copper_weight = this.orderpcbView.copperWeight.options[index].value
    },
    setMinTracing: function(index) {
      this.activeMinTracing = index
      this.orderPcbRequest.data.min_trace_space = this.orderpcbView.minTracing.options[index].value
    },
    setImpedanceControl: function(index) {
      this.activeImpedanceControl = index
      this.orderPcbRequest.data.impedance_control = this.orderpcbView.impedanceControl.options[index].value
    },
    setMinHoleSize: function(index) {
      this.activeMinHoleSize = index
      this.orderPcbRequest.data.min_finished_hole_size = this.orderpcbView.minHoleSize.options[index].value
    },
    setBoardDrill: function(index) {
      this.activeBoardDrill = index
    },
    setSolderColor: function(index) {
      this.activeSolderColor = index
      this.orderPcbRequest.data.solder_color = this.orderpcbView.solderColor.options[index].value
    },
    setScreenColor: function(index) {
      this.activeScreenColor = index
      this.orderPcbRequest.data.screen_color = this.orderpcbView.screenColor.options[index].value
    },
    setDefaultValue: function() {
      this.orderPcbRequest.data.number_of_layers = this.orderpcbView.layers.options[this.activeLayer].value
      this.orderPcbRequest.data.finish = this.orderpcbView.surfaceFinish.options[this.activeSurfaceFinish].value
      this.orderPcbRequest.data.copper_weight = this.orderpcbView.copperWeight.options[this.activeCopperWeight].value
      this.orderPcbRequest.data.min_trace_space = this.orderpcbView.minTracing.options[this.activeMinTracing].value
      this.orderPcbRequest.data.impedance_control = this.orderpcbView.impedanceControl.options[this.activeImpedanceControl].value
      this.orderPcbRequest.data.min_finished_hole_size =
      this.orderpcbView.minHoleSize.options[this.activeMinHoleSize].value
      this.orderPcbRequest.data.solder_color = this.orderpcbView.solderColor.options[this.activeSolderColor].value
      this.orderPcbRequest.data.screen_color = this.orderpcbView.screenColor.options[this.activeScreenColor].value
    },
    save: function() {
      this.loading = true
      this.saveOrderPcb(this.orderPcbRequest)
      console.log(this.saveOrderPcbStatus)
      this.loading = false
      this.$router.push({ path: '/price' })
    }
  },
  beforeCreate: function() {
    const url = 'src/store/static/orderpcb.json' // GET api url here.
    axios.get(url)
      .then(response => {
        this.orderpcbView = response.data.data
        this.setDefaultValue()
        this.isShow = true
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  created: function() {
    // this.getOrderPcbView()
    // this.orderpcbView = this.getOrderPcbResponse[0]
    this.orderPcbRequest = orderPcbRequestFormat
    // this.setDefaultValue()
  }
}
</script>

<style>
	.buttonBorder {
		border: 2px solid #ff9900;
	}
	.sample-color {
    width: 12px;
    height: 12px;
    margin-right: 4px;
    display: inline-block;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }
  .solderMask-border {
    border: 1px solid #ccc;
  }
</style>
