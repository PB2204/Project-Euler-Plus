#include <bits/stdc++.h>
using namespace std;

set<int> primes = {1, 2};

void Sieve(int n)
{
    vector<bool> sieve(100000000, false);
    sieve[2] = true;
    int p = 2;

    while(primes.size() < n)
    {
        for(int i=2; p*i < sieve.size(); i++)
        {
            sieve[p*i] = true;
        }
        for(int i=p+1; i<sieve.size(); i++)
        {
            if(sieve[i] == false)
            {
                p = i;
                primes.insert(p);
                break;
            }
        }
    }
}


int Formula(int a, int b)
{
    int count = 0;

    for(int n=0; ; n++)
    {
        int formula = (n*n) + (a*n) + b;

        if(primes.count(formula) == 0) break;
        count++;
    }
    return count;
}



int main()
{
    int N;
    cin >> N;

    Sieve(2000);

    int a, b;
    int index = N;
    int mostPrimes = 0;

    pair<int, int> ans;

    while(index >= 2)
    {
        for(int i=index; i>=2; i--)
        {
            if(primes.count(i))
            {
                b = i;
                break;
            }
        }

        for(int i=1; i<=b; i++)
        {
            a = -i;
            int count = Formula(a, b);

            if(count > mostPrimes)
            {
                mostPrimes = count;
                ans = make_pair(a, b);
            }
        }
        index--;
    }
    cout << ans.first << ' ' << ans.second << endl;
    return 0;
}