function Bone({ className, darkMode }) {
  return (
    <div
      className={`rounded-lg relative overflow-hidden ${
        darkMode ? 'bg-surface-hover' : 'bg-gray-200'
      } ${className}`}
    >
      <div className="absolute inset-0 shimmer" />
    </div>
  )
}

export default function LoadingSkeleton({ darkMode }) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Profile Card Skeleton */}
      <div className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-surface-card border-surface-border' : 'bg-white border-light-border'
      }`}>
        {/* Header gradient */}
        <div className={`h-24 ${
          darkMode ? 'bg-surface-hover' : 'bg-gray-100'
        }`}>
          <div className="absolute inset-0 shimmer" />
        </div>

        {/* Content */}
        <div className="px-6 pb-6 -mt-12">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4">
            {/* Avatar */}
            <div className={`p-1 rounded-full ${darkMode ? 'bg-surface-card' : 'bg-white'}`}>
              <Bone className="w-28 h-28 rounded-full" darkMode={darkMode} />
            </div>

            {/* Info */}
            <div className="flex-1 w-full space-y-2 pb-2">
              <Bone className="h-7 w-48 mx-auto sm:mx-0" darkMode={darkMode} />
              <Bone className="h-4 w-28 mx-auto sm:mx-0" darkMode={darkMode} />
            </div>

            {/* Button skeleton */}
            <Bone className="hidden sm:block h-10 w-32 rounded-xl" darkMode={darkMode} />
          </div>

          {/* Bio */}
          <div className="mt-4 space-y-2">
            <Bone className="h-4 w-full max-w-md" darkMode={darkMode} />
            <Bone className="h-4 w-3/4 max-w-sm" darkMode={darkMode} />
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Bone className="h-5 w-24" darkMode={darkMode} />
            <Bone className="h-5 w-32" darkMode={darkMode} />
            <Bone className="h-5 w-28" darkMode={darkMode} />
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`p-4 rounded-xl border ${
                darkMode ? 'border-surface-border' : 'border-light-border'
              }`}>
                <div className="flex flex-col items-center gap-2">
                  <Bone className="w-10 h-10 rounded-lg" darkMode={darkMode} />
                  <Bone className="h-6 w-12" darkMode={darkMode} />
                  <Bone className="h-3 w-16" darkMode={darkMode} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Repos Skeleton */}
      <div className={`rounded-2xl border p-6 transition-colors duration-300 ${
        darkMode ? 'bg-surface-card border-surface-border' : 'bg-white border-light-border'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <Bone className="h-6 w-36" darkMode={darkMode} />
          <Bone className="h-7 w-20 rounded-full" darkMode={darkMode} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className={`p-5 rounded-xl border space-y-3 ${
                darkMode ? 'border-surface-border' : 'border-light-border'
              }`}
            >
              <div className="flex items-center gap-2">
                <Bone className="w-4 h-4 rounded" darkMode={darkMode} />
                <Bone className="h-5 w-32" darkMode={darkMode} />
              </div>
              <Bone className="h-4 w-full" darkMode={darkMode} />
              <Bone className="h-4 w-3/4" darkMode={darkMode} />
              <div className="flex items-center gap-3 pt-2">
                <Bone className="h-4 w-16" darkMode={darkMode} />
                <Bone className="h-4 w-12" darkMode={darkMode} />
                <Bone className="h-4 w-12" darkMode={darkMode} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
