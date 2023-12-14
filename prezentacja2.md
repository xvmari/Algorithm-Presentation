---
marp: true
theme: rose-pine-moon
style: |
  :root {
      font-family: 'CaskaydiaCove Nerd Font', sans-serif;
  }
author: Spioch
_class: lead
---

<style>
section.center > * {
  text-align: center;
}
</style>

<!-- _class: center -->

# Schemat Hornera 😎<br>(Horner Schema)

śpioch

---

## 🤯 Co to jest Schemat Hornera? 🤯

- Algorytm opiera się na faktoryzacji wielomianu, umożliwiając efektywne obliczenia.

* Algorytm Hornera to skuteczna metoda obliczania wartości wielomianu w punkcie, redukując liczbę niepotrzebnych operacji.

---

# Schemat blokowy

![bg right:50% 60%](schemat2.png)

---

# Pseudokot 😺

```py
function horner(A, x)
    n = A.length - 1
    wynik = A[n]
    for i = n - 1 to 0
        wynik = wynik * x + A[i]
    return wynik
```

---

## Złożoność Obliczeniowa

- $O(n)$, gdzie $n$ to stopień wielomianu.

## Przykład zestawu danych:

- Wielomian stopnia $n$ z losowymi współczynnikami.

---

## Operacja Dominująca

- $Mnożenie$ i $dodawanie$ wewnątrz pętli Hornera są operacjami dominującymi.

---

## Zilustrowane działanie algorytmu

![bg right:65% 69%](zilustrowanieH.png)

---
