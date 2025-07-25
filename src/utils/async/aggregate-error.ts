export class AggregateError extends Error {
  errors: Error[]
  constructor(errors: Error[] = []) {
    super()
    const name = errors.find(e => e.name)?.name ?? ''
    this.name = `AggregateError(${name}...)`
    this.message = `AggregateError with ${errors.length} errors`
    this.stack = errors.find(e => e.stack)?.stack ?? this.stack
    this.errors = errors
  }
}
