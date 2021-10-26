import os

dir_path = './voices'

ts_text = ('{{\n'
          '\tmessages: {{\n'
          '\t\tzh: \'{zh_tag}\',\n'
          '\t\ten: \'{en_tag}\',\n'
          '\t}},\n'
          '\tpath: \'{filename}\',\n'
          '\ttag: \'{tagname}\',\n'
          '}},\n')

with open("ts_res.ts", "w+", encoding='utf-8') as ts_file:
    for f in os.listdir(dir_path):
        name_str = f.split('.')[0]
        f_name = name_str.split('-')[1]
        t_name = name_str.split('-')[0]
        ts_file.write(ts_text.format(zh_tag=f_name, \
                                        en_tag='', \
                                        filename=f, \
                                        tagname=t_name))


