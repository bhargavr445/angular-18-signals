https://blog.angular-university.io/angular-signals/


==============================
## Computed signals 
==============================
# 1. Make sure to run the base signal everytime if we are adding any logics to it. It we cannot run base signal everytime then this might not work as expected. 
Reference: What is the major pitfall to look out for when creating computed signals?

# 2. Can we update or set computed signals? 
A. NOOOO

# 3. If we are deriving signal from input signal, will it execute when input signal receives value?
A. Yes, since input signals non-writable(cannot modify) signals, so in feature these input signals cannot be updated from its component. So computed will execute when input signal receives value.



