<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden">
    <!-- Left side shapes -->
    <div class="absolute left-0 top-0 h-full w-64">
      <div class="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-blob"></div>
      <div class="absolute top-3/4 -left-32 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-blob"
        style="animation-delay: 2s"></div>
      <div class="absolute top-1/2 -left-32 w-64 h-64 bg-pink-500/10 rounded-full filter blur-3xl animate-blob"
        style="animation-delay: 4s"></div>
    </div>

    <!-- Right side shapes -->
    <div class="absolute right-0 top-0 h-full w-64">
      <div class="absolute top-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-blob-reverse">
      </div>
      <div
        class="absolute top-3/4 -right-32 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-blob-reverse"
        style="animation-delay: 2s"></div>
      <div class="absolute top-1/2 -right-32 w-64 h-64 bg-pink-500/10 rounded-full filter blur-3xl animate-blob-reverse"
        style="animation-delay: 4s"></div>
    </div>

    <!-- Floating particles -->
    <div class="absolute inset-0">
      <div v-for="n in 20" :key="n" class="particle" :style="{
        '--delay': `${Math.random() * 5}s`,
        '--size': `${Math.random() * 10 + 5}px`,
        '--start-pos': `${Math.random() * 100}%`
      }">
      </div>
    </div>
  </div>
</template>

<style scoped>
.particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle at center, var(--primary) 0%, transparent 100%);
  border-radius: 50%;
  left: var(--start-pos);
  top: -20px;
  animation: float calc(20s + var(--delay)) linear infinite;
  opacity: 0.5;
}

@keyframes float {
  0% {
    transform: translateY(-20px) rotate(0deg);
    opacity: 0;
  }

  10% {
    opacity: 0.5;
  }

  90% {
    opacity: 0.5;
  }

  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}
</style>