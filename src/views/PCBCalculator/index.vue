<template>
	<div>
		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Order Type: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button" v-bind:class="{ 'buttonBorder': (oType.id === activeOrderType) }" 
				    	v-for="oType in orderType" @click="setOrderType(oType.id)"
				    	style="margin-right: 10px;">
				      {{oType.Title}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal" v-show="activeOrderType !== 0">
		  <div class="field-label is-normal">
		    <label class="label">X-out Allowance in Panel: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button">Accept</a>
				    <a class="button">Not Accept</a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">PCB Type: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button" v-bind:class="{ 'buttonBorder': (pType.id === activePcbType) }" 
				    	v-for="pType in pcbType" @click="setPcbType(pType.id)"
				    	style="margin-right: 10px;">
				      {{pType.Title}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal" v-show="activePcbType !== 0">
		  <div class="field-label is-normal">
		    <label class="label">Heat Conductivity: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button buttonBorder">1.0W</a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Dimensions: </label>
		  </div>
		  <div class="field-body">
		    <div class="field has-addons">
		     	<p class="control">
    				<input class="input" type="number" placeholder="Height">
  				</p>
				  <p class="control">
				    <a class="button is-static">
				      X
				    </a>
				  </p>
				  <p class="control">
    				<input class="input" type="number" placeholder="Width">
  				</p>
				  <p class="control">
				    <a class="button is-static">
				      mm
				    </a>
				  </p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Quantity: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
		     		<div class="columns">
		     				<div class="column is-1">
				    				<input class="input" type="number">
		     				</div>
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
				    <a class="button" v-bind:class="{ 'buttonBorder': (layer.id === activeLayer) }" 
				    	v-for="layer in layers" @click="setLayers(layer.id)"
				    	style="margin-right: 10px;">
				      {{layer.Title}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal" v-show="activeLayer !== 0 && activeLayer !== 1">
		  <div class="field-label is-normal">
		    <label class="label">Layers Order: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
		  			<div class="columns">
		     			<div class="column is-1">
				    		<input class="input" type="text" placeholder="L1">
		     			</div>
		     			<div class="column is-1">
				    		<input class="input" type="text" placeholder="L2">
		     			</div>
		     			<div class="column is-1">
				    		<input class="input" type="text" placeholder="L3">
		     			</div>
		     			<div class="column is-1">
				    		<input class="input" type="text" placeholder="L4">
		     			</div>
		     		</div>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">PCB Kinds: : </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
		     		<div class="columns">
		     				<div class="column is-1">
				    				<input class="input" type="number">
		     				</div>
		     		</div>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Thickness: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button" v-bind:class="{ 'buttonBorder': (thick.id === activeThickness) }" 
				    	v-for="thick in thickness" @click="setThick(thick.id)"
				    	style="margin-right: 10px;">
				      {{thick.Title}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Min Spacing: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button" v-bind:class="{ 'buttonBorder': (mSpacing.id === activeMinSpacing) }" 
				    	v-for="mSpacing in minSpacing" @click="setMinSpacing(mSpacing.id)"
				    	style="margin-right: 10px;">
				      {{mSpacing.Title}}
				    </a>
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
				    <a class="button" v-bind:class="{ 'buttonBorder': (mHoleSize.id === activeMinHoleSize) }" 
				    	v-for="mHoleSize in minHoleSize" @click="setMinHoleSize(mHoleSize.id)"
				    	style="margin-right: 10px;">
				      {{mHoleSize.Title}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Solder Mask: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
		     		
				    <a class="button" v-bind:class="{ 'buttonBorder': (sMask.id === activeSolderMask) }" 
				    	v-for="sMask in solderMask" @click="setSolderMask(sMask.id)"
				    	style="margin-right: 10px;">

				    	<span class="icon">
      					<em class="sample-color"
      						:style="{'background-color': sMask.color}"
      						v-bind:class="{ 'solderMask-border': (sMask.color === '#fff')}"></em>
    					</span>

    					<span>{{sMask.Title}}</span>
				      
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Silk Screen Color: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
		     		
				    <a class="button" v-bind:class="{ 'buttonBorder': (screenColor.id === activeSilkScreenColor) }" 
				    	v-for="screenColor in silkScreenColor" @click="setScreenColor(screenColor.id)"
				    	style="margin-right: 10px;">

				    	<span class="icon">
      					<em class="sample-color" 
      						:style="{'background-color': screenColor.color}"
      						v-bind:class="{ 'solderMask-border': (screenColor.color === '#fff')}"></em>
    					</span>

    					<span>{{screenColor.Title}}</span>
				      
				    </a>
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
				    <a class="button" v-bind:class="{ 'buttonBorder': (sFinish.id === activeSurfaceFinish) }" 
				    	v-for="sFinish in surfaceFinish" @click="setSurfaceFinish(sFinish.id)"
				    	style="margin-right: 10px;">
				      {{sFinish.Title}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal" v-show="activeSurfaceFinish === 2">
		  <div class="field-label is-normal">
		    <label class="label">Immersion gold Thickness: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button" v-bind:class="{ 'buttonBorder': (gThickness.id === activeGoldThickness) }" 
				    	v-for="gThickness in ImmersionGoldThickness" @click="setGoldThickness(gThickness.id)"
				    	style="margin-right: 10px;">
				      {{gThickness.Title}}
				    </a>
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
				    <a class="button" v-bind:class="{ 'buttonBorder': (fBeveling.id === activeFingerBeveling) }" 
				    	v-for="fBeveling in goldenFingerBeveling" @click="setFingerBeveling(fBeveling.id)"
				    	style="margin-right: 10px;">
				      {{fBeveling.Title}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Via Process: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button" v-bind:class="{ 'buttonBorder': (vProcess.id === activeViaProcess) }" 
				    	v-for="vProcess in viaProcess" @click="setViaProcess(vProcess.id)"
				     	style="margin-right: 10px;">
				      {{vProcess.Title}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Flying Probe: </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button" v-bind:class="{ 'buttonBorder': (fProbe.id === activeFlyingProbe) }" 
				    	v-for="fProbe in flyingProbe" @click="setFlyingProbe(fProbe.id)"
				    	style="margin-right: 10px;">
				      {{fProbe.Title}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

		<div class="field is-horizontal">
		  <div class="field-label is-normal">
		    <label class="label">Finished Copper (outer): </label>
		  </div>
		  <div class="field-body">
		    <div class="field">
		     	<p class="control">
				    <a class="button" v-bind:class="{ 'buttonBorder': (fCopper.id === activefinishCopper) }" 
				    	v-for="fCopper in finishedCopper" @click="setFinishedCopper(fCopper.id)"
				    	style="margin-right: 10px;">
				      {{fCopper.Title}}
				    </a>
  				</p>
		    </div>
		  </div>
		</div>

	</div>	
</template>

<script>
export default {
  data() {
    return {
      orderType: [{
        Title: 'Single PCB',
        id: 0
      }, {
        Title: 'Panel PCB as design',
        id: 1
      }, {
        Title: 'Panel by ALLPCB',
        id: 2
      }],
      activeOrderType: 0,
      pcbType: [{
        Title: 'FR-4（ShengYi Tg140）',
        id: 0
      }, {
        Title: 'FR-4（National Tg130）',
        id: 1
      }, {
        Title: 'CEM-1',
        id: 2
      }, {
        Title: 'Aluminum Board (only single-sided available)',
        id: 3
      }],
      activePcbType: 0,
      layers: [{
        Title: '1',
        id: 0
      }, {
        Title: '2',
        id: 1
      }, {
        Title: '4',
        id: 2
      }, {
        Title: '6',
        id: 3
      }],
      activeLayer: 1,
      thickness: [{
        Title: '0.4',
        id: 0
      }, {
        Title: '0.6',
        id: 1
      }, {
        Title: '0.8',
        id: 2
      }, {
        Title: '1.0',
        id: 3
      }, {
        Title: '1.2',
        id: 4
      }, {
        Title: '1.6',
        id: 5
      }, {
        Title: '2.0',
        id: 6
      }],
      activeThickness: 5,
      minSpacing: [{
        Title: '5/5mil',
        id: 0
      }, {
        Title: '6/6mil',
        id: 1
      }],
      activeMinSpacing: 1,
      minHoleSize: [{
        Title: '0.25mm',
        id: 0
      }, {
        Title: '0.3mm',
        id: 1
      }, {
        Title: '0.35mm',
        id: 2
      }, {
        Title: '0.4mm',
        id: 3
      }],
      activeMinHoleSize: 3,
      solderMask: [{
        Title: 'None',
        id: 0,
        color: '#fff'
      }, {
        Title: 'Green',
        id: 1,
        color: '#007606'
      }, {
        Title: 'Black',
        id: 2,
        color: '#000'
      }, {
        Title: 'White',
        id: 3,
        color: '#fff'
      }, {
        Title: 'Yellow',
        id: 4,
        color: '#ffde00'
      }, {
        Title: 'Red',
        id: 5,
        color: '#c81609'
      }, {
        Title: 'Blue',
        id: 6,
        color: '#0943c8'
      }, {
        Title: 'Matte black',
        id: 7,
        color: '#333'
      }, {
        Title: 'Matte green',
        id: 8,
        color: '#46c017'
      }],
      activeSolderMask: 1,
      silkScreenColor: [{
        Title: 'None',
        id: 0,
        color: '#fff'
      }, {
        Title: 'Green',
        id: 1,
        color: '#007606'
      }, {
        Title: 'Black',
        id: 2,
        color: '#000'
      }, {
        Title: 'White',
        id: 3,
        color: '#fff'
      }, {
        Title: 'Yellow',
        id: 4,
        color: '#ffde00'
      }],
      activeSilkScreenColor: 3,
      surfaceFinish: [{
        Title: 'HASL with Lead',
        id: 0
      }, {
        Title: 'HASL Lead Free',
        id: 1
      }, {
        Title: 'Immersion gold',
        id: 2
      }, {
        Title: 'OSP',
        id: 3
      }],
      activeSurfaceFinish: 0,
      ImmersionGoldThickness: [{
        Title: '1u"',
        id: 0
      }, {
        Title: '2u"',
        id: 1
      }],
      activeGoldThickness: 0,
      goldenFingerBeveling: [{
        Title: 'No',
        id: 0
      }, {
        Title: 'Yes',
        id: 1
      }],
      activeFingerBeveling: 0,
      viaProcess: [{
        Title: 'Tenting Vias',
        id: 0
      }, {
        Title: 'Vias not covered',
        id: 1
      }, {
        Title: 'Plugged vias',
        id: 2
      }],
      activeViaProcess: 0,
      flyingProbe: [{
        Title: 'Full Test(Free)',
        id: 0
      }, {
        Title: 'Full Test',
        id: 1
      }],
      activeFlyingProbe: 0,
      finishedCopper: [{
        Title: '1oz',
        id: 0
      }, {
        Title: '2oz',
        id: 1
      }, {
        Title: '3oz',
        id: 2
      }],
      activefinishCopper: 0
    }
  },
  methods: {
    setOrderType: function(orderTypeId) {
      this.activeOrderType = orderTypeId
    },
    setPcbType: function(pcbTypeId) {
      this.activePcbType = pcbTypeId
    },
    setLayers: function(layerId) {
      this.activeLayer = layerId
    },
    setThick: function(thickId) {
      this.activeThickness = thickId
    },
    setMinSpacing: function(mSpacingId) {
      this.activeMinSpacing = mSpacingId
    },
    setMinHoleSize: function(mHoleSizeId) {
      this.activeMinHoleSize = mHoleSizeId
    },
    setSolderMask: function(sMaskId) {
      this.activeSolderMask = sMaskId
    },
    setScreenColor: function(screenColorId) {
      this.activeSilkScreenColor = screenColorId
    },
    setSurfaceFinish: function(surfaceFinishId) {
      this.activeSurfaceFinish = surfaceFinishId
    },
    setGoldThickness: function(goldThicknessId) {
      this.activeGoldThickness = goldThicknessId
    },
    setFingerBeveling: function(fingerBevelingId) {
      this.activeFingerBeveling = fingerBevelingId
    },
    setViaProcess: function(vProcessId) {
      this.activeViaProcess = vProcessId
    },
    setFlyingProbe: function(fProbeId) {
      this.activeFlyingProbe = fProbeId
    },
    setFinishedCopper: function(fCopperId)  {
      this.activefinishCopper = fCopperId
    }
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
