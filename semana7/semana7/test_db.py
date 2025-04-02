from votacao.models import Questao, Opcao
from django.utils import timezone
import datetime

# a)
def show_all_questions():
    print("\nLista de todas as questões:")
    questions = Questao.objects.all()
    for q in questions:
        print(f"- {q.questao_texto}")

# b)
def show_options_gostas():
    print("\nOpções das questões que começam com 'Gostas de...':")
    questions = Questao.objects.filter(questao_texto__startswith="Gostas de")
    if questions.exists():
        for question in questions:
            print(f"\nQuestão: {question.questao_texto}")
            options = Opcao.objects.filter(questao=question)
            for opt in options:
                print(f"- {opt.opcao_texto} (Votos: {opt.votos})")
    else:
        print("Nenhuma questão encontrada começada com 'Gostas de...'")

# c)
def show_options_gostas_above_2():
    print("\nOpções com mais de 2 votos das questões que começam com 'Gostas de...':")
    questions = Questao.objects.filter(questao_texto__startswith="Gostas de")
    if questions.exists():
        for question in questions:
            print(f"\nQuestão: {question.questao_texto}")
            options = Opcao.objects.filter(questao=question, votos__gt=2)
            if options.exists():
                for opt in options:
                    print(f"- {opt.opcao_texto} (Votos: {opt.votos})")
            else:
                print("- Nenhuma opção com mais de 2 votos")
    else:
        print("Nenhuma questão encontrada começada com 'Gostas de...'")

# d)
def show_recent_questions():
    three_years_ago = timezone.now() - datetime.timedelta(days=3*365)
    print("\nQuestões publicadas nos últimos 3 anos:")
    questions = Questao.objects.filter(pub_data__gte=three_years_ago)
    for q in questions:
        print(f"- {q.questao_texto} (Data: {q.pub_data.date()})")

# e)
def show_total_votes():
    total = sum(op.votos for op in Opcao.objects.all())
    print(f"\nNúmero total de votos na base de dados: {total}")

# f)
def show_most_voted_options():
    print("\nQuestões e as suas opções mais votadas:")
    questions = Questao.objects.all()
    for q in questions:
        most_voted = Opcao.objects.filter(questao=q).order_by('-votos').first()
        if most_voted:
            print(f"Questão: {q.questao_texto}")
            print(f"Opção mais votada: {most_voted.opcao_texto} ({most_voted.votos} votos)\n")

show_all_questions()
show_options_gostas()
show_options_gostas_above_2()
show_recent_questions()
show_total_votes()
show_most_voted_options()
