/**
 * SyntaxHighlighter - Objective-C Brush
 * http://blog.seymourdev.com/
 *
 * @version
 * 1.0.2 (February 25 2012)
 *
 * @author
 * Alex Rezit 
 * 
 * @copyright
 * Copyright (C) 2011-2012 Seymour Dev Team.
 */

SyntaxHighlighter.brushes.ObjC = function()
{
    var datatypes = '';
    datatypes += 'const char bool BOOL double float int long short id void';
    
    var keywords = '';
    keywords += 'assign retain copy readonly readwrite atomic nonatomic strong weak ';
    keywords += 'IBAction IBOutlet SEL YES NO nil NULL ';
    keywords += 'const_cast continue private public protected __declspec ';
    keywords += 'default delete deprecated dllexport dllimport do dynamic_cast ';
    keywords += 'else enum explicit extern if for friend goto inline ';
    keywords += 'mutable naked namespace new noinline noreturn nothrow ';
    keywords += 'register reinterpret_cast return selectany ';
    keywords += 'sizeof static static_cast struct switch template this ';
    keywords += 'thread throw true false try typedef typeid typename union ';
    keywords += 'using uuid virtual volatile whcar_t while ';
    keywords += '@property @selector @interface @end @implementation @synthesize ';
    keywords += '@autoreleasepool';
    
    var methods = '';
    methods += 'alloc init ';

    var values;
    values += '';

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLineCComments,    css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.multiLineCComments,     css: 'comments' },
        { regex: SyntaxHighlighter.regexLib.doubleQuotedString,     css: 'string' },
        { regex: SyntaxHighlighter.regexLib.singleQuotedString,     css: 'value' },
        { regex: new RegExp(this.getKeywords(values), 'gm'),        css: 'value' },
        { regex: new RegExp('\\b[0-9]\\b', 'g'),                    css: 'value' },
        { regex: new RegExp('\\b[0-9]\\w+\\b', 'g'),                css: 'value' },
        { regex: new RegExp('\\b[0-9]\\w+.\\w+\\b', 'g'),           css: 'value' }, 
        { regex: new RegExp('@[a-z]\\w+', 'g'),                     css: 'keyword' },
        { regex: new RegExp('@', 'g'),                              css: 'string' },
        { regex: new RegExp('\\bNS\\w+\\b', 'g'),                   css: 'functions'},
        { regex: new RegExp(this.getKeywords(methods), 'gm'),       css: 'functions' },
        { regex: new RegExp('\\bnumberWith\\w+\\b', 'g'),           css: 'functions' },
        { regex: new RegExp('\\bstringWith\\w+\\b', 'g'),           css: 'functions' },
        { regex: new RegExp('\\barrayWith\\w+\\b', 'g'),            css: 'functions' },
        { regex: new RegExp('\\bdictionaryWith\\w+\\b', 'g'),       css: 'functions' },
        { regex: new RegExp('\\bfor\\w+\\b', 'g'),                  css: 'functions' },
        { regex: new RegExp('^ *#.*', 'gm'),                        css: 'preprocessor' },
        { regex: new RegExp(this.getKeywords(datatypes), 'gm'),     css: 'keyword' },
        { regex: new RegExp(this.getKeywords(keywords), 'g'),       css: 'keyword' },
        ];
    
}

SyntaxHighlighter.brushes.ObjC.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.ObjC.aliases = ['objc', 'obj-c', 'oc', 'cocoa'];
