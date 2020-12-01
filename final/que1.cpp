#include<bits/stdc++.h>
using namespace std;
#define IOS ios::sync_with_stdio(false); cin.tie(0); cout.tie(0);
#define int long long
#define pb push_back
#define ff first
#define ss second

bool isvalid(int x,int y,int n,int m)
{
    return (x>=0 && x<n && y>=0 && y<m);
}

int cx[]={0,0,1,1,1,-1,-1,-1};
int cy[]={1,-1,1,0,-1,1,0,-1};

int32_t main()
{
    IOS;
	int n;
	cin>>n;
	string s1,s2;
	cin>>s1>>s2;
	int r=0,m=0;
	for(int i=0;i<n;i++)
	{
	    if(s2[i]=='r')
	    r++;
	    else
	    m++;
	}
	int p=0;
	bool f=true;
	for(int i=0;i<n;i++)
	{
	    if(s1[i]=='r')
	    {
	        if(r>0)
	        {
	            r--;
	        }
	        else
	        {
	            p=i;
	            f=false;
	            break;
	        }
	    }
	    else
	    {
	        if(m>0)
	        {
	            m--;
	        }
	        else
	        {
	            p=i;
	            f=false;
	            break;
	        }
	    }
	}
	if(f)
	cout<<"0"<<endl;
	else
	{
	    cout<<n-p<<endl;
	}
	    
	
	
	return 0;
}