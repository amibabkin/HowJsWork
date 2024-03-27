"use strict"

class Dictionary {
  constructor() {
    this.map = Object.create(null)
  }

  set(key, value) {
    this.map[key] = value
    return this
  }

  get(key) {
    return this.map[key]
  }

  has(key) {
    // handle false, null, undefined, '', 0
    return !!this.map[key]
  }

  delete(key) {
    delete this.map[key]
  }

  keys() {
    return Object.keys(this.map)
  }

  get size() {
    return Object.keys(this.map).length
  }

  clear() {
    this.map = Object.create(null)
  }

  static from(hash) {
    const instance = new Dictionary()

    for (const key in hash) {
      instance.set(key, hash[key])
    }

    return instance
  }
}

const cities = {
  Shanghai: 24256800,
  Beijing: 21516000,
  Delhi: 16787941,
  Lagos: 16060303,
}

const cityPopulation1 = Dictionary.from(cities)
console.log(cityPopulation1)

const city1Result = cityPopulation1.get('Shanghai')

console.log(city1Result)

const cityPopulation2 = new Dictionary()

cityPopulation2.set('Shanghai', 24256800)
cityPopulation2.set('Beijing', 21516000)

cityPopulation2.has('Shanghai') ? console.log(cityPopulation2.get('Shanghai')) : null