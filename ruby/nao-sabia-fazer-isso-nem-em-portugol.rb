class Aleatoriozinho
    #Xn+1 =(a⋅Xn+c)mod m
    
    #consts dessa porra
    A = 1664525 #multiplicação 
    C = 1013904223 #adição
    M = 2**32 #modulo

    def initialize(seed)
        @x = seed
    end

    def srGerador
        @x = (A * @x + C) % M
        @x.to_f/M
    end
end

seed = 10
srGeraGera = Aleatoriozinho.new(seed)
puts "num no meu botico #{(srGeraGera.srGerador * 100).round(0)} vezes"