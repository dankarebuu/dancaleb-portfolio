import dashboardImage from '../assets/wingmacc/dashboard.png'

function HeroProjectPreview() {
  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-xl border border-[#27313A] bg-[#11171D] shadow-2xl shadow-black/30">
        {/* Browser toolbar */}
        <div className="flex items-center gap-2 border-b border-[#27313A] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#4ADE80]" />
          </div>

          <div className="mx-auto flex max-w-xs flex-1 items-center justify-center rounded-md bg-[#0B0E11] px-3 py-1.5">
            <span className="truncate text-xs text-[#778391]">
              wingmacc-inventory.app
            </span>
          </div>
        </div>

        {/* Project screenshot */}
        <div className="bg-[#0B0E11]">
          <img
            src={dashboardImage}
            alt="WINGMACC Church Inventory System dashboard"
            className="block h-auto w-full object-cover object-top"
          />
        </div>
      </div>

      {/* Project label */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-[#40C9BD]">
            FEATURED PROJECT / 001
          </p>
          <h3 className="mt-1 text-sm font-medium text-[#F1F3F5]">
            WINGMACC Inventory System
          </h3>
        </div>

        <span className="text-xs text-[#778391]">01 / 01</span>
      </div>
    </div>
  )
}

export default HeroProjectPreview