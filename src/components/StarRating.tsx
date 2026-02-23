interface StarRatingProps {
  label: string
  rating: number
}

const categoryIcons: { [key: string]: string } = {
  Money: '💰',
  Work: '💼',
  Study: '📚',
  Health: '💪',
  Relationships: '❤️',
  Luck: '🍀',
}

export function StarRating({ label, rating }: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const icon = categoryIcons[label] || '⭐'

  return (
    <div className="flex items-center justify-between py-4 px-2 hover:bg-slate-700/20 rounded-lg transition-colors">
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span className="text-sm font-semibold text-slate-200">{label}</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => {
          const isFilled = i < fullStars
          const isHalf = i === fullStars && hasHalfStar

          return (
            <span
              key={i}
              className={`text-lg transition-all duration-300 drop-shadow-lg ${
                isFilled || isHalf
                  ? 'text-yellow-300 drop-shadow-[0_0_4px_rgba(253,224,71,0.5)]'
                  : 'text-slate-600'
              }`}
            >
              ★
            </span>
          )
        })}
      </div>
    </div>
  )
}
