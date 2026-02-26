interface AlignmentStarsProps {
  score: number // 0–10
}

function StarIcon({ filled }: { filled: boolean }) {
  const starPath =
    'M12 2l2.4 6.8H22l-6.2 4.5 2.4 6.8L12 15.6l-6.2 4.5 2.4-6.8L2 8.8h7.6z'

  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
      <path d={starPath} fill={filled ? '#92400e' : '#d6d3d1'} />
    </svg>
  )
}

export function AlignmentStars({ score }: AlignmentStarsProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-0.5" role="img" aria-label={`${score} out of 10`}>
        {Array.from({ length: 10 }).map((_, i) => (
          <StarIcon key={i} filled={i < score} />
        ))}
      </div>
      <span className="text-xl font-bold text-stone-800">
        {score} <span className="text-stone-400 font-normal text-base">/ 10</span>
      </span>
    </div>
  )
}
