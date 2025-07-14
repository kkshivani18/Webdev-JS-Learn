def xor(a, b):
    # XOR between two strings
    result = ""
    
    for i in range(1, len(b)):
        result += "0" if a[i] == b[i] else "1"
    return result

def crc(data, key):
    # Appending the dividend with extra zeroes ((n-1) of key)
    added_data = data + '0' * (len(key) - 1)
    remainder = added_data[:len(key)] 

    for i in range(len(data)):
        if remainder[0] == '1':
            # XOR with the key
            remainder = xor(remainder, key)

        else:
            # XOR with a string of 0's
            remainder = xor(remainder, '0' * len(key))

        # Error handling for index out of range
        if len(key) + i < len(added_data):
            remainder += added_data[len(key) + i]

    return remainder[-(len(key) - 1):]  

if __name__ == "__main__":
    data = input("Enter the data in binary format: ")
    key = input("Enter the key (divisor) in binary format: ")

    remainder = crc(data, key)
    print("Remainder after CRC calculation is: ", remainder)
