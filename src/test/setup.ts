import React from 'react'
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

Object.defineProperty(globalThis, 'React', {
  writable: true,
  configurable: true,
  value: React,
})

afterEach(() => {
  cleanup()
})


class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null
  readonly rootMargin = ''
  readonly thresholds: ReadonlyArray<number> = []
  readonly scrollMargin = ''

  constructor(callback: IntersectionObserverCallback) {
    callback(
      [
        {
          isIntersecting: true,
          intersectionRatio: 1,
          target: document.body,
          boundingClientRect: document.body.getBoundingClientRect(),
          intersectionRect: document.body.getBoundingClientRect(),
          rootBounds: null,
          time: 0,
        },
      ],
      this,
    )
  }

  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
})

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
})
