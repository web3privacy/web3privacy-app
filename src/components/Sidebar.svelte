<script>
  import "tailwindcss/tailwind.css";

  // Categories data
  const categories = [
    { name: "Bridge", tags: ["bridge"], count: 12 },
    { name: "DeFi", tags: ["defi"], count: 2 },
    { name: "DID", tags: ["did"], count: 432 },
    { name: "Hardware", tags: ["hardware"], count: 14 },
    { name: "Infrastructure", tags: ["infrastructure"], count: 2 },
    { name: "KYC", tags: ["kyc"], count: 432 },
    { name: "Layer 2", tags: ["layer-2"], count: 14 },
    { name: "Messaging", tags: ["messaging"], count: 2 },
    { name: "NFT", tags: ["nft"], count: 432 },
    { name: "OS", tags: ["os"], count: 14 },
    { name: "RPC", tags: ["rpc"], count: 24 },
    { name: "Storage", tags: ["storage"], count: 2 },
    { name: "VPN", tags: ["vpn"], count: null },
    { name: "Wallets", tags: ["wallet"], count: null },
    { name: "Other", tags: ["other"], count: null },
  ];

  // Calculate the total project count
  const totalProjects = categories.reduce(
    (sum, category) => sum + (category.count || 0),
    0,
  );
</script>

<div class="flex flex-col items-start justify-start gap-8 w-1/4 box-border">
  <div class="flex flex-col items-start justify-start gap-2 box-border">
    <button class="flex items-center justify-center gap-1 p-2 bg-white group">
      <div class="flex gap-1">
        <span class="text-black text-xl font-bold leading-7 box-border"
          >All</span
        >
        <span class="text-gray-400 text-lg font-light leading-7 box-border"
          >({totalProjects})</span
        >
      </div>
    </button>
    {#each categories as { name, count }}
      <button
        class="flex items-center justify-center gap-1 p-2 hover:bg-white/20"
      >
        <div class="flex gap-1">
          <span class="text-white text-xl font-bold leading-7 box-border"
            >{name}</span
          >
          {#if count !== null}
            <span class="text-gray-400 text-lg font-light leading-7 box-border"
              >({count})</span
            >
          {/if}
        </div>
      </button>
    {/each}
  </div>
</div>
