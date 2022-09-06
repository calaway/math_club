def middle_square_next(previous, digits)
  (previous ** 2). # Square the previous number
    to_s. # Convert it to a string
    rjust(digits * 2, '0'). # Pad it with leading zeros until it's twice the number of digits
    slice((digits / 2)...(3 * digits / 2)). # Slice off the beginning and end
    to_i # Convert back to an integer
end

def middle_square_sequence(seed, length)
  digits = seed.to_s.length
  sequence = [seed]
  length.times do
    sequence << middle_square_next(sequence.last, digits)
  end
  sequence
end

def lcg_next(a, c, m, xn)
  (a * xn + c) % m
end

def lcg_sequence(a, c, m, seed, length)
  sequence = [seed]
  length.times do
    sequence << lcg_next(a, c, m, sequence.last)
  end
  sequence
end
