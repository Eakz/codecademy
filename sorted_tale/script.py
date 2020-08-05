'''
Made some timeit comparison for Quicksort and Bubblesort
towards the end of the file
'''

import utils
import sorts
from timeit import timeit

# bookshelf = utils.load_books('books_small.csv')
# bookshelf_v1 = bookshelf.copy()
# bookshelf_v2 = bookshelf.copy()
# long_bookshelf = utils.load_books('books_largs.csv')
# long_bookshelf_v1 = long_bookshelf.copy()

# for book in bookshelf:
#     print(book['title'])
#     book['author_lower'] = book['author'].lower()
#     book['title_lower'] = book['title'].lower()

# for book in long_bookshelf:
#     print(book['title'])
#     book['author_lower'] = book['author'].lower()
#     book['title_lower'] = book['title'].lower()


# def by_title_ascending(book_a, book_b):
#     return book_a['title_lower'] > book_b['title_lower']


# def by_author_ascending(book_a, book_b):
#     return book_a['author_lower'] > book_b['author_lower']


# def by_total_length(book_a, book_b):
#     return len(book_a['author_lower']) + len(book_a['title_lower']) > len(
#         book_b['author_lower']) + len(book_b['title_lower'])


# sort_1 = sorts.bubble_sort(bookshelf, by_title_ascending)
# sort_2 = sorts.bubble_sort(bookshelf_v1, by_author_ascending)
# sort_3 = sorts.quicksort(bookshelf_v2, 0,
#                          len(bookshelf_v2) - 1, by_author_ascending)
# for book in sort_1:
#     print(book['title'])
# print('\n', '-' * 30, '\n')
# for book in sort_2:
#     print(book['author'])
# print('\n', '-' * 30, '\n')
# for book in bookshelf_v2:
#     print(book['author'])
print('Bubblesort')
b=timeit('''
import utils
import sorts
from timeit import timeit

bookshelf = utils.load_books('books_small.csv')
bookshelf_v1 = bookshelf.copy()
bookshelf_v2 = bookshelf.copy()
long_bookshelf = utils.load_books('books_largs.csv')
long_bookshelf_v1 = long_bookshelf.copy()
long_bookshelf_v2 = long_bookshelf.copy()


for book in bookshelf:
    book['author_lower'] = book['author'].lower()
    book['title_lower'] = book['title'].lower()

for book in long_bookshelf:
    book['author_lower'] = book['author'].lower()
    book['title_lower'] = book['title'].lower()


def by_title_ascending(book_a, book_b):
    return book_a['title_lower'] > book_b['title_lower']


def by_author_ascending(book_a, book_b):
    return book_a['author_lower'] > book_b['author_lower']


def by_total_length(book_a, book_b):
    return len(book_a['author_lower']) + len(book_a['title_lower']) > len(
        book_b['author_lower']) + len(book_b['title_lower'])

sort_long = sorts.bubble_sort(long_bookshelf_v2, by_title_ascending)


''',number=5000)
print(b)
print('Quicksort')
c=timeit('''
import utils
import sorts
from timeit import timeit

bookshelf = utils.load_books('books_small.csv')
bookshelf_v1 = bookshelf.copy()
bookshelf_v2 = bookshelf.copy()
long_bookshelf = utils.load_books('books_largs.csv')
long_bookshelf_v1 = long_bookshelf.copy()

for book in bookshelf:
    book['author_lower'] = book['author'].lower()
    book['title_lower'] = book['title'].lower()

for book in long_bookshelf:
    book['author_lower'] = book['author'].lower()
    book['title_lower'] = book['title'].lower()


def by_title_ascending(book_a, book_b):
    return book_a['title_lower'] > book_b['title_lower']


def by_author_ascending(book_a, book_b):
    return book_a['author_lower'] > book_b['author_lower']


def by_total_length(book_a, book_b):
    return len(book_a['author_lower']) + len(book_a['title_lower']) > len(
        book_b['author_lower']) + len(book_b['title_lower'])

sorts.quicksort(long_bookshelf_v1, 0, len(long_bookshelf_v1)-1,
                by_title_ascending)


''',number=5000)
print(c)
