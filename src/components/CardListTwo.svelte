<script>
  import { animateText } from "../lib/helpers";

  function animateCard(el) {
    console.log("Animating1");
  }
</script>

<div
  class="px-2 py-2 pr-6 border border-1 hover:cursor-point transition-all border-white/30 cursor-pointer hover:bg-white hover:text-black hover:border-black w-full group"
  on:mouseenter={animateCard}
>
  <div class="w-full gap-6 justify-center items-center flex">
    <img
      src="/zkBob.png"
      alt=""
      class="object-cover bg-gray-300 w-44 border border-black"
    />
    <div class="w-full gap-3 flex flex-col justify-start items-start">
      <div class="gap-2 flex flex-col justify-start items-start">
        <div class="flex flex-0-1-auto justify-start items-center gap-2">
          <div class=" text-shadow text-2xl font-bold animate-card">
            ZK-Bob.com
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            class="fill-white group-hover:fill-black"
          >
            <g clip-path="url(#clip0_686_7584)">
              <path
                d="M1.51437 13.7241C1.1135 13.7241 0.770321 13.5813 0.484849 13.2959C0.199377 13.0104 0.0566406 12.6672 0.0566406 12.2663V2.06222C0.0566406 1.66135 0.199377 1.31817 0.484849 1.0327C0.770321 0.747228 1.1135 0.604492 1.51437 0.604492H6.61643V2.06222H1.51437V12.2663H11.7185V7.16428H13.1762V12.2663C13.1762 12.6672 13.0335 13.0104 12.748 13.2959C12.4625 13.5813 12.1194 13.7241 11.7185 13.7241H1.51437ZM4.94004 9.86108L3.91963 8.84067L10.6981 2.06222H8.07416V0.604492H13.1762V5.70655H11.7185V3.08263L4.94004 9.86108Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_686_7584">
                <rect
                  width="13.1196"
                  height="13.1196"
                  transform="translate(0.0566406 0.604492)"
                />
              </clipPath>
            </defs>
          </svg>
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
          class="border-2 flex justify-center items-center p-3 gap-2 box-border group-hover:border-black"
        >
          <div class="text-2xl font-bold leading-none">84%</div>
        </div>
      </div>
    </div>
  </div>
</div>
