import React from 'react'

const Card = ({numbered}) => {
  return (
    <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl bg-gray-400">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://wallpapers.com/images/featured/war-8sn9uwnr2x1m52oh.jpg" />
  </div>
  <div class="flex items-center md:items-start">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. {numbered || "default '4'"}</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}

export default Card
