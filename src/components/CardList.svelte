<script>
  import { animateText } from "../lib/helpers";

  function animateCard(el) {
    console.log("Animating1");
  }
</script>

<div
  class="hover:cursor-point transition-all border-white/30 cursor-pointer hover:bg-white/10 w-full fill-white group"
  on:mouseenter={animateCard}
>
  <div class="w-full gap-6 justify-center items-center">
    <img
      src="/zkBob.png"
      alt=""
      class="object-cover bg-gray-300 max-w-full block w-44"
    />
    <div class="w-full gap-3 flex flex-col justify-start items-start">
      <div class="gap-2 flex flex-col justify-start items-start">
        <div class="flex flex-0-1-auto justify-start items-center gap-2">
          <div class=" text-shadow text-2xl font-bold animate-card">
            ZK-Bob.com
          </div>
          <img
            src="https://uploads-ssl.webflow.com/652173ad2500dc96a4c7d41d/6521859cc9772a5d547cdc2d_Vectors-Wrapper.svg"
            alt=""
            class="w-3 h-3 object-cover flex justify-center items-center max-w-full"
          />
        </div>
        <div
          class=" text-opacity-50 text-shadow text-lg font-medium animate-card"
        >
          ZK Pools transfers
        </div>
      </div>

      <div class="w-full flex justify-between items-center">
        <div class="flex flex-0-1-auto justify-start items-start gap-6">
          <div class="flex flex-col justify-start items-start">
            <div class=" text-opacity-50 text-shadow text-sm font-medium">
              Anonymity
            </div>
            <div class=" text-shadow text-lg font-bold">YES</div>
          </div>
          <div class="flex flex-col justify-start items-start">
            <div class=" text-opacity-50 text-shadow text-sm font-medium">
              Decentralized
            </div>
            <div class=" text-shadow text-lg font-bold">NO</div>
          </div>
          <div class="flex flex-col justify-start items-start">
            <div class=" text-opacity-50 text-shadow text-sm font-medium">
              Open Source
            </div>
            <div class=" text-shadow text-lg font-bold">Partly</div>
          </div>
          <div class="flex flex-col justify-start items-start">
            <div class=" text-opacity-50 text-shadow text-sm font-medium">
              Status
            </div>
            <div class=" text-shadow text-lg font-bold">Alpha</div>
          </div>
          <div class="flex flex-col justify-start items-start">
            <div class=" text-opacity-50 text-shadow text-sm font-medium">
              Data tracked
            </div>
            <div class=" text-shadow text-lg font-bold">NO</div>
          </div>
          <div class="flex flex-col justify-start items-start">
            <div class=" text-opacity-50 text-shadow text-sm font-medium">
              Compliance
            </div>
            <div class=" text-shadow text-lg font-bold">NO</div>
          </div>
        </div>
        <div
          class="border-2 flex justify-center items-center p-3 gap-2 box-border group-hover:bg-white group-hover:text-black group-hover:border-white"
        >
          <div class="text-2xl font-bold leading-none">84%</div>
        </div>
      </div>
    </div>
  </div>
</div>
