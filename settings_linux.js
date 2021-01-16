" =========================================================================================================
" |                                            General Custom Settings                                    |
" =========================================================================================================

" ---------------------------------------------------------
" Vundle and Plugins                                      |
" --------------------------------------------------------- 

" Tip: How find vimrc folder in linux: edit $HOME/.vimrc

set nocompatible

filetype plugin indent off
syntax off

set rtp+=~/.vim/bundle/Vundle.vim

call vundle#begin()

Plugin 'VundleVim/Vundle.vim'

" to install a plugin add it here and run :PluginInstall.
" to update the plugins run :PluginInstall! or :PluginUpdate
" to delete a plugin remove it here and run :PluginClean

Plugin 'bling/vim-airline'
Plugin 'flazz/vim-colorschemes'
" press r to refresh current directory or R to refresh root directory.
" press m to open menu in NERDtree
Plugin 'preservim/nerdtree'
"Plugin 'Valloric/YouCompleteMe'

" add plugins before this
call vundle#end()

filetype plugin indent on
syntax on

colorscheme gruvbox

" ---------------------------------------------------------
" ALLOW BACKSPACE IN INSERT MODE (because linux terminal) |
" --------------------------------------------------------- 

set backspace=indent   
set backspace+=eol   
set backspace+=start 

" ---------------------------------------------------------
" TAB CONFIGURATIONS                                      |
" --------------------------------------------------------- 

set tabstop=4 
set shiftwidth=4  
set softtabstop=4  
set smarttab      
set expandtab       

" ---------------------------------------------------------
" MISCELLANEOUS                                           |
" --------------------------------------------------------- 

set number      
set autochdir         " allow the shell to open in the current directory path of the file
set noswapfile        " avoid boring message about swap file bla bla bla..
set autoindent           
set smartindent     
set showcmd               
set showmode!         " disable showmode because bar visual plugin           
set background=dark       

" ---------------------------------------------------------
" CUSTOM KEY MAPPINGS                                     |
" --------------------------------------------------------- 

nnoremap r A
nnoremap q G
nnoremap e ^i
nnoremap b u
nnoremap d D
nnoremap c yy
nnoremap v p
nnoremap <space> dd
" windows
" inoremap <c-space> <esc>
" nnoremap <c-space> a
inoremap <c-@> <esc>
nnoremap <c-@> a
inoremap {<CR> {<CR>}<Esc>i<CR><Esc>ki<Tab>
nnoremap <silent> w :set relativenumber!<CR>
nnoremap <Tab> i
nnoremap <CR> i<CR>
nnoremap t :t.<CR>
vnoremap <c-c> 99999Y
nnoremap <C-a> ggVG
nmap clear 1q 9999D
inoremap <c-f> <c-n>
nnoremap sh :sh<CR>
nnoremap ss :w<CR>
nnoremap d diw
map i <nop>

" Moving through the editor

 nnoremap I <c-y>
 nnoremap K <c-e>
 nnoremap L w
 nnoremap J b
 nnoremap i k
 nnoremap j h
 nnoremap k j

" Nagivate between splits window
nnoremap <c-w> <c-w><c-w>

" NerdTree window toggle
nnoremap <silent> nn :NERDTreeToggle<CR>

" ---------------------------------------------------------
" COMPETITIVE PROGRAMMING TEMPLATE                        |
" --------------------------------------------------------- 

imap STAR #include <bits/stdc++.h><CR><CR>using namespace std; <CR>
\ <CR>#define fi                  first
\ <CR>#define sec                 second
\ <CR>#define vi                  vector<int>
\ <CR>#define pb                  push_back
\ <CR>#define mp                  make_pair
\ <CR>#define debug(x)            cout << x << "\n";
\ <CR>#define all(cont)           cont.begin(), cont.end()
\ <CR>#define forn(i, n)          for(int i=0; i<int(n); i++)
\ <CR>#define fori(i, n, index)   for(int i=index; i<int(n); i++)
\ <CR>#define rfor(i, r)          for(auto& i:r)
\ <CR><CR>int main() {<CR>ios_base::sync_with_stdio(false);
\ <CR>cin.tie(NULL);
\ <CR>freopen("in.txt", "r", stdin);<CR><CR>return 0;<Up><Tab>