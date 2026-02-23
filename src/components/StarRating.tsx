interface StarRatingProps {
  label: string
  rating: number
}

export function StarRating({ label, rating }: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-800">
      <span className="text-sm font-medium text-gray-300">{label}</span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => {
          const isFilled = i < fullStars
          const isHalf = i === fullStars && hasHalfStar

          return (
            <span
              key={i}
              className={`text-xl transition-colors ${
                isFilled || isHalf
                  ? 'text-yellow-400'
                  : 'text-gray-600'
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
