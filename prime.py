import sys
import time
import random


def timer(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        start_process_time = time.process_time()
        result = func(*args, **kwargs)
        print("Time:", time.time() - start_time, "seconds")
        print("Process time:", time.process_time() -
              start_process_time, "seconds")
        return result
    return wrapper


def is_prime_trial_division(n):
    if n == 2 or n == 3:
        return True
    if n < 3:
        return False
    if n % 2 == 0 or n % 3 == 0:
        return False
    limit = int(n ** 0.5) + 1
    counter = 0
    for i in range(6, limit, 6):
        # if i > 10 ** counter:
        #   print("Checked through 10^", counter)
        #   counter += 1
        if n % (i - 1) == 0 or n % (i + 1) == 0:
            return False
    return True


def sieve(n):
    primes = [2]
    ore = list(range(3, n + 1, 2))
    limit = int(n ** 0.5)
    while ore[0] <= limit:
        prime = ore.pop(0)
        primes.append(prime)
        ore = list(filter(lambda x: (x % prime != 0), ore))
    primes.extend(ore)
    return primes


def successive_squaring(base, exponent, modulus):
    accumulator = 1
    while exponent > 0:
        if exponent % 2 == 1:
            accumulator = (accumulator * base) % modulus
        base = (base * base) % modulus
        exponent = exponent // 2
    return accumulator


def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)


def is_prime_fermat(n):
    for i in range(10):
        trial_witness = random.randint(2, n - 1)
        # print(trial_witness)
        if gcd(trial_witness, n) != 1:
            return False
        if successive_squaring(trial_witness, n - 1, n) != 1:
            return False
    return True


# Jenny's Prime: 8675309
# Belphegor’s Prime: 1000000000000066600000000000001
print(timer(is_prime_trial_division)(8675309))
print(timer(is_prime_fermat)(1000000000000066600000000000001))
# print(timer(successive_squaring)(7, 10**1_000_000, 853))
